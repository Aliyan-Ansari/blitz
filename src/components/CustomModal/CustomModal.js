import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React, { useRef } from 'react';
import CustomCreditCard from '../CustomCreditCard/index'

const CustomModal = ({isOpen,onClose,modalState}) => {
  
    const initialRef = useRef(null)
    const finalRef = useRef(null)
  return (
    <div>
      
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          {
           modalState?.title === 'Card'? (
            <ModalContent style={{background:'#0e1015', color:'white'}}>
              <CustomCreditCard/>
          </ModalContent>
           ):(
             <ModalContent style={{background:'#0e1015', color:'white'}}>
               <ModalHeader>Change your {modalState?.title}</ModalHeader>
               <ModalCloseButton />
               <ModalBody pb={6}>
                 <FormControl>
                   <FormLabel>New {modalState?.title}</FormLabel>
                   <Input ref={initialRef} placeholder={`Enter your ${modalState?.title}`} type={modalState?.title === 'Password' ? 'password':'text'} />
                 </FormControl>
     
                 <FormControl mt={4}>
                   <FormLabel>Confirm {modalState?.title}</FormLabel>
                   <Input placeholder={`Confirm your ${modalState?.title}`} type={modalState?.title === 'Password' ? 'password':'text'} />
                 </FormControl>
               </ModalBody>
     
               <ModalFooter>
                 <Button colorScheme='blue' mr={3}>
                   Change
                 </Button>
                 <Button onClick={onClose} color="black">Cancel</Button>
               </ModalFooter>
             </ModalContent>
           ) 
          }
        </Modal>
    </div>
  )
}

export default CustomModal
