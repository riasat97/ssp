import emailjs from 'emailjs-com';

const serviceId = 'service_t8vvou7'; 
const templateId = 'template_hgsadcf'; 
const userId = '3xHH91k9n009xoQEl'; 

export const sendEmail = async (formData) => {
  try {
    console.log(formData);
    await emailjs.send(serviceId, templateId, formData, userId);
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
