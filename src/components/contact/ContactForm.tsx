import { useRef, useEffect, useState, createContext, FormEvent, useContext } from 'react';
import { contactForm } from '../../data/constants';
import styles from '../../style'
import DropdownPhone from '../dropdowns/DropdownPhone'
import DOMPurify from 'dompurify';
import emailjs from '@emailjs/browser'
import { LangContext } from '../language';

interface PhoneCodeContextType {
  phoneCode: string;
  setPhoneCode: React.Dispatch<React.SetStateAction<string>>;
}

const PhoneCodeContext = createContext<PhoneCodeContextType>({
  phoneCode: '',
  setPhoneCode: () => {},
});

const ContactForm = () => {
  const waitTime = useRef<number>(30000);
  const [canSubmit, setCanSubmit] = useState<boolean>(true);
  const requestCount = useRef<number>(0);
  const { currentLang } = useContext(LangContext);

  const [formFistName, setFormFirstName] = useState<string>('');
  const [formLastName, setFormLastName] = useState<string>('');
  const [formEmail, setFormEmail] = useState<string>('');
  const [formPhone, setFormPhone] = useState<string>('');
  const [phoneCode, setPhoneCode] = useState<string>('');
  const [formMessage, setFormMessage] = useState<string>('');

  useEffect(() => {
    setTimeout(() => {
      setCanSubmit(true);
      if (requestCount.current > 3) {
        requestCount.current = 0;
        waitTime.current = 30000;
      }
    }, waitTime.current);
  }, [canSubmit]);

  const validateForm = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^\+[0-9]{1,4} [0-9]{6,14}$/;

    if (!phoneCode.split(' ')[1]) {
      setFormPhone('');
      
    } else if (!phonePattern.test(formPhone)) {
      alert(contactForm.alert.phone[currentLang]);
      return false;
    }

    if (!emailPattern.test(formEmail)) {
      alert(contactForm.alert.email[currentLang]);
      return false;
    }

    if (contactForm.messageMinLength && formMessage.length < contactForm.messageMinLength) {
      alert(contactForm.alert.message[currentLang]);
      return false;
    }

    return true;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    if (!validateForm()) return ;  
    if (!contactForm.emailAPI) return;

    if (requestCount.current > 3) {
      alert(contactForm.alert.cooldown[currentLang]);
      waitTime.current = 900000;
      setCanSubmit(false);
      return;
    }

    const templateParams = {
      from_firstname: formFistName,
      from_lastname: formLastName,
      from_email: formEmail,
      from_phone: formPhone,
      message: formMessage
    };

    emailjs
      .send(contactForm.emailAPI!.serviceId, 
        contactForm.emailAPI!.templateId, 
        templateParams,
        contactForm.emailAPI!.publicKey
      ).then(() => {
          alert(contactForm.alert.apiOK[currentLang]);

        },
        (error) => {
          alert(contactForm.alert.apiError[currentLang])
          console.error('Form submission error: ', error);
        },
      );
      setCanSubmit(false);
      requestCount.current++;
  };

  return (
    <form id='contact-contactForm'
      onSubmit={(e) => handleSubmit(e)}
      className=
      {`
        ${styles.sizeFull}
        md:max-h-[75%] 
        ${styles.flexCol}
        ${styles.contentCenter}
        font-primary-regular
        color-scheme-secondary
        px-[10%]
        pt-[10%]
        pb-[8%]
        space-y-[5%]
        shadow-lg
        border-2
      `}
    >
      <h2 className=
        {`
          w-full
          h-1/5
          ${styles.contentStartAll}
          font-primary-bold
          xxl:text-[180%] text-base
          ${styles.heading2}
          tracking-wider
          leading-10
          mb-[8%]
        `}
        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(contactForm.title[currentLang])}}
      />
        
      <div className=
        {`
          w-full
          h-1/5
          ${styles.flexRow}
          ${styles.contentCenter}
          space-x-2
          resize-none
          relative
          text-xxs
        `}
      >
        <input type="text"
          name="lastname" 
          placeholder={`${contactForm.fields['lastname'][currentLang]}`}
          required={contactForm.mendatoryFields ? contactForm.mendatoryFields.includes('lastname') : false}
          className=
          {`
            ${styles.sizeFull}
            color-scheme-primary
            rounded-md
            px-4
            resize-none
            border-2
          `}
          onChange={(e) => setFormLastName(e.target.value)}
        />
        
        <input type="text"
          name="firstname" 
          placeholder={`${contactForm.fields['firstname'][currentLang]}`}
          required={contactForm.mendatoryFields ? contactForm.mendatoryFields.includes('firstname') : false}
          className=
          {`
            ${styles.sizeFull}
            color-scheme-primary
            rounded-md
            px-4
            border-2
            resize-none
          `}
          onChange={(e) => setFormFirstName(e.target.value)}
        />
        {contactForm.mendatoryFields && contactForm.mendatoryFields.includes('name') 
          ? <a key="names-asterisk" className='absolute text-[--color-tertiary] top-0 -right-3'>*</a>
          : ""
        }
      </div>

      <div className=
        {`
          w-full
          h-1/5
          relative
          text-xxs
        `}
      >
        <input type="email"
          name="email"
          placeholder={`${contactForm.fields['email'][currentLang]}`}
          required={contactForm.mendatoryFields ? contactForm.mendatoryFields.includes('email') : false}
          className=
          {`
            ${styles.sizeFull}
            color-scheme-primary
            rounded-md
            px-4
            border-2
            resize-none
          `}
          onChange={(e) => setFormEmail(e.target.value)}
        />
        {contactForm.mendatoryFields && contactForm.mendatoryFields.includes('email') 
          ? <a key="email-asterisk" id="email-asterisk" className='absolute text-[--color-tertiary] self-end px-2'>*</a>
          : ""
        }
      </div>

      <div className=
        {`
          w-full
          h-1/5
          ${styles.flexRow}
          ${styles.contentCenter}
          space-x-[3%]
          pl-[4%]
          border-2
          resize-none
          relative
          text-xxs
          rounded-md
          transition-all
          duration-300
          ease-in-out
          focus-within:border-[--color-tertiary]
        `}
      >
        <PhoneCodeContext.Provider value={{phoneCode, setPhoneCode}}>
          <DropdownPhone />
        </PhoneCodeContext.Provider>

        <input type="tel"
          name="phone"
          placeholder={`${contactForm.fields['phone'][currentLang]}`}
          required={contactForm.mendatoryFields ? contactForm.mendatoryFields.includes('phone') : false}
          className=
          {`
            ${styles.sizeFull}
            color-scheme-primary
            rounded-md
            px-4
            resize-none
          `}
          style={{border: 'none'}}
          onChange={(e) => setFormPhone(phoneCode+' '+e.target.value)}
        />
        {contactForm.mendatoryFields && contactForm.mendatoryFields.includes('phone') 
          ? <a key="phone-asterisk" id="message-asterisk" className='absolute text-[--color-tertiary] self-end px-2'>*</a>
          : ""
        }
      </div>

      <div className=
        {`
          w-full
          h-3/5
          relative
          text-xxs
        `}
      >
        <textarea name="message"
          required={contactForm.mendatoryFields ? contactForm.mendatoryFields.includes('message') : false}
          className=
          {`
            ${styles.sizeFull}
            color-scheme-primary
            rounded-md
            px-4
            py-2
            overflow-y-scroll
            resize-none
            border-2
          `}
          placeholder={`${contactForm.fields['message'][currentLang]}`}
          minLength={contactForm.messageMinLength}
          onChange={(e) => setFormMessage(e.target.value)}
        />
        {contactForm.mendatoryFields && contactForm.mendatoryFields.includes('message') 
          ? <a key="message-asterisk" id="message-asterisk" className='absolute text-[--color-tertiary] self-end px-2'>*</a>
          : ""
        }
      </div>

      {contactForm.mendatoryFields && contactForm.mendatoryFields.length > 0 ?
        <label id="indication-label"
          className=
          {`
            lg:text-[70%]
            self-baseline
          `}
        ><strong>*</strong>: {contactForm.alert['mendatory'][currentLang]}</label>
        : ""
      }

      <br/>
      <button type="submit"
        className=
        {`
          rounded-md
          ${canSubmit ? 
            'color-scheme-quaternary \
            hover:bg-[--color-quinary] \
            focus:scale-[0.96]'
            : 
            'border-2 \
            border-[--color-quaternary] \
            bg-[--color-secondary] \
            cursor-wait'
          }
          transition-all
          duration-150
          ease-in-out
        `}
      >{canSubmit ? contactForm.alert['submit'][currentLang] : '🕒'}</button>
    </form>
  )
}

export { ContactForm, PhoneCodeContext };
