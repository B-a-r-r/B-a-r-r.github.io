import { useEffect } from 'react';
import { formStructure } from '../../data/constants';
import styles from '../../style'
import DropdownPhone from '../dropdowns/DropdownPhone'
import DOMPurify from 'dompurify';

const Form = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  
  return (
    <form id='contact-form'
      className=
      {`
        ${styles.sizeFull}
        max-h-[700px]
        max-w-[600px]
        ${styles.flexCol}
        ${styles.contentCenter}
        font-primary-regular
        color-secondary
        px-[10%]
        py-[5%]
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
        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(formStructure.title)}}
      />
        
      <div id="names-info"
        className=
        {`
          w-full
          h-1/5
          ${styles.flexRow}
          space-x-2
          resize-none
          relative
          text-[80%]
        `}
      >
        <input type="text" 
          id="last-name" 
          name="last-name" 
          placeholder="Last name.." 
          required 
          className=
          {`
            ${styles.sizeFull}
            color-primary
            rounded-md
            px-4
            resize-none
            border-2
          `}
        />
        
        <input type="text" 
          id="fist-name" 
          name="first-name" 
          placeholder="First name.." 
          required 
          className=
          {`
            ${styles.sizeFull}
            color-primary
            rounded-md
            px-4
            border-2
            resize-none
          `}
        />
        {formStructure.mendatoryFields.includes('name') 
          ? <a key="names-asterisk" id="message-asterisk" className='absolute text-[--light-color-tertiary] self-c px-2'>*</a>
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
          required
          className=
          {`
            ${styles.sizeFull}
            color-primary
            rounded-md
            px-4
            border-2
            resize-none
          `}
        />
        {formStructure.mendatoryFields.includes('email') 
          ? <a key="email-asterisk" id="message-asterisk" className='absolute text-[--light-color-tertiary] self-end px-2'>*</a>
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
        <DropdownPhone />

        <input type="tel"
          id="phone"
          name="phone"
          placeholder="Phone number.."
          required
          className=
          {`
            ${styles.sizeFull}
            color-primary
            rounded-md
            px-4
            border-l-2
            resize-none
          `}
        />
        {formStructure.mendatoryFields.includes('phone') 
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
          required
          className=
          {`
            ${styles.sizeFull}
            color-primary
            rounded-md
            px-4
            py-2
            overflow-y-scroll
            resize-none
            border-2
          `}
          placeholder="Your message..."
          minLength={formStructure.messageMinLength}
        />
        {formStructure.mendatoryFields.includes('message') 
          ? <a key="message-asterisk" id="message-asterisk" className='absolute text-[--light-color-tertiary] self-end px-2'>*</a>
          : ""
        }
      </div>

      {formStructure.mendatoryFields.length > 0 ?
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
          color-quaternary
          py-[2px]
          px-4
        `}
        onClick={(e) => {handleSubmit(e)}}
      >Submit</button>

    </form>
  )
}

export default Form
