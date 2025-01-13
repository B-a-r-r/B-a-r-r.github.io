import { useRef, useEffect, useState, createContext, FormEvent } from 'react';
import { formStructures } from '../../data/constants';
import styles from '../../style'
import DropdownPhone from '../dropdowns/DropdownPhone'
import DOMPurify from 'dompurify';
import emailjs from '@emailjs/browser'

interface PhoneCodeContextType {
  phoneCode: string;
  setPhoneCode: React.Dispatch<React.SetStateAction<string>>;
}

const PhoneCodeContext = createContext<PhoneCodeContextType>({
  phoneCode: '',
  setPhoneCode: () => {},
});

const Form = () => {
  const waitTime = useRef<number>(30000);
  const [canSubmit, setCanSubmit] = useState<boolean>(true);
  const requestCount = useRef<number>(0);

  const form = formStructures.filter((form) => form.id === "contact")[0];
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
      alert('Please enter a valid phone number.');
      return false;
    }

    if (!emailPattern.test(formEmail)) {
      alert('Please enter a valid email address.');
      return false;
    }

    if (formMessage.length < form.messageMinLength) {
      alert(`Your message is too short. It should contain at least ${form.messageMinLength} characters.`);
      return false;
    }

    return true;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    if (!validateForm()) return ;  

    if (requestCount.current > 3) {
      alert('You have reached the maximum number of requests allowed. \
        Please try again later.'
      );
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
      .send(form.emailAPI.serviceId, 
        form.emailAPI.templateId, 
        templateParams,
        form.emailAPI.publicKey
      ).then(() => {
          alert('Your message has been sent successfully!');

        },
        (error) => {
          alert('Oops, something went wrong... Please try again later!');
          console.log('FAILED to send email from the form...', error.text);
        },
      );
      setCanSubmit(false);
      requestCount.current++;
  };

  return (
    <form id='contact-form'
      onSubmit={(e) => handleSubmit(e)}
      className=
      {`
        ${styles.sizeFull}
        max-h-[700px]
        max-w-[600px]
        ${styles.flexCol}
        ${styles.contentCenter}
        font-primary-regular
        color-scheme-secondary
        px-[10%]
        pt-[5%]
        pb-[6%]
        space-y-4
        shadow-lg
        border-2
        aspect-[16/9]
      `}
    >
      <h2 id='form-title'
        className=
        {`
          w-full
          h-1/5
          ${styles.contentStartAll}
          font-primary-bold
          xxl:text-[180%] text-[100%]
          ${styles.heading2}
          tracking-wider
          leading-10
          mb-[17%]
        `}
        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(form.title)}}
      />
        
      <div id="names-info"
        className=
        {`
          w-full
          h-1/5
          ${styles.flexRow}
          ${styles.contentCenter}
          space-x-2
          resize-none
          relative
          text-[80%]
        `}
      >
        <input type="text" 
          id="lastname" 
          name="lastname" 
          placeholder="Last name.." 
          required={form.mendatoryFields.includes('lastname')}
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
          id="fist_name" 
          name="firstname" 
          placeholder="First name.." 
          required={form.mendatoryFields.includes('firstname')}
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
        {form.mendatoryFields.includes('name') 
          ? <a key="names-asterisk" id="names-asterisk" className='absolute text-[--light-color-tertiary] top-0 -right-3'>*</a>
          : ""
        }
      </div>

      <div id="email-info"
        className=
        {`
          w-full
          h-1/5
          relative
          text-[80%]
        `}
      >
        <input type="email"
          id="email"
          name="email"
          placeholder="Email address.."
          required={form.mendatoryFields.includes('email')}
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
        {form.mendatoryFields.includes('email') 
          ? <a key="email-asterisk" id="email-asterisk" className='absolute text-[--light-color-tertiary] self-end px-2'>*</a>
          : ""
        }
      </div>

      <div id="phone-info"
        className=
        {`
          w-full
          h-1/5
          ${styles.flexRow}
          ${styles.contentCenter}
          space-x-2
          pl-[4%]
          border-2
          resize-none
          relative
          text-[80%]
        `}
      >
        <PhoneCodeContext.Provider value={{phoneCode, setPhoneCode}}>
          <DropdownPhone />
        </PhoneCodeContext.Provider>

        <input type="tel"
          id="phone"
          name="phone"
          placeholder="Phone number.."
          required={form.mendatoryFields.includes('phone')}
          className=
          {`
            ${styles.sizeFull}
            color-scheme-primary
            rounded-md
            px-4
            border-l-2
            resize-none
          `}
          onChange={(e) => setFormPhone(phoneCode+' '+e.target.value)}
        />
        {form.mendatoryFields.includes('phone') 
          ? <a key="phone-asterisk" id="message-asterisk" className='absolute text-[--light-color-tertiary] self-end px-2'>*</a>
          : ""
        }
      </div>

      <div id="message-info"
        className=
        {`
          w-full
          h-3/5
          relative
          text-[80%]
        `}
      >
        <textarea id="message"
          name="message"
          required={form.mendatoryFields.includes('message')}
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
          placeholder="Your message..."
          minLength={form.messageMinLength}
          onChange={(e) => setFormMessage(e.target.value)}
        />
        {form.mendatoryFields.includes('message') 
          ? <a key="message-asterisk" id="message-asterisk" className='absolute text-[--light-color-tertiary] self-end px-2'>*</a>
          : ""
        }
      </div>

      {form.mendatoryFields.length > 0 ?
        <label id="indication-label"
          className=
          {`
            lg:text-[70%]
            self-baseline
          `}
        ><strong>*</strong>: mendatory information</label>
        : ""
      }

      <br/>
      <button type="submit"
        className=
        {`
          rounded-md
          ${canSubmit ? 
            'color-scheme-quaternary \
            hover:bg-[--color-quinary]' 
            : 'bg-[#e1e1e1] text-white cursor-wait'}
        `}
      >{canSubmit ? 'Submit' : 'Cooldown..'}</button>

    </form>
  )
}

export { Form, PhoneCodeContext };
