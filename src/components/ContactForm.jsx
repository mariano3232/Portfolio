import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ContactUs = () => {
  const form = useRef();
  const notify = () => toast("Mail sent!");
  function handleSubmit(){
    toast.success('📧 Mail sent!!', {
      position:"bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme:'dark',
      });
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7jgkrfn', 'template_68nfaj5', form.current, '-1rbYCzMa2EalLl4s')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <h1 className={styles.h1}>Send me an E-mail :</h1>
      <a href="mailto:marianomelend@gmail.com" className={styles.mail}>marianomelend@gmail.com</a>
      <div className={styles.inputContainer}>
        <label className={styles.label}>Name</label>
        <input type="text" name="user_name" className={styles.input} />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.label}>E-mail</label>
        <input type="email" name="user_email" className={styles.input} />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.label}>Subject</label>
        <input type="text" name="subject" className={styles.input}/>
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.label}>Message</label>
        <textarea name="message"  className={styles.text}/>
      </div>
      <div className={styles.inputContainer}>
       <input type="submit" value="Send" onClick={()=>{handleSubmit()}} className={styles.submit}/>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </form>
  );
};