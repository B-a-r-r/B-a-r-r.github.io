import styles from '../style'
import DropdownPhone from './DropdownPhone'

const Form = () => {
  return (
    <form id='contact-form'
      className=
      {`
        ${styles.sizeFull}
        ${styles.flexCol}
        ${styles.contentCenter}
        font-primary-regular
        color-secondary
        px-8
        py-6
        space-y-4
        shadow-lg
        border-2
      `}
    >
      <h2 id='form-title'
        className=
        {`
          w-full
          h-1/5
          ${styles.contentStartAll}
          font-primary-bold
          lg:text-[180%]
          tracking-wider
          leading-10
        `}
      > Feel free<br/>to contact me  </h2>
        
      <div id="names-info"
        className=
        {`
          w-full
          h-1/5
          ${styles.flexRow}
          ${styles.contentCenter}
          space-x-2
        `}
      >
        <input type="text" 
          id="name" 
          name="name" 
          placeholder="Name" 
          required 
          className=
          {`
            ${styles.sizeFull}
            color-primary
            rounded-md
            px-4
          `}
        />
        <input type="text" 
          id="surname" 
          name="surname" 
          placeholder="Surname" 
          required 
          className=
          {`
            ${styles.sizeFull}
            color-primary
            rounded-md
            px-4
          `}
        />
      </div>

      <input type="email"
        id="email"
        name="email"
        placeholder="Email"
        required
        className=
        {`
          w-full
          h-1/5
          color-primary
          rounded-md
          px-4
        `}
      />

      <div id="phone-info"
        className=
        {`
          w-full
          h-1/5
          ${styles.flexRow}
          ${styles.contentCenter}
          space-x-2
        `}
      >
        <DropdownPhone />

        <input type="tel"
          id="phone"
          name="phone"
          placeholder="Phone"
          required
          className=
          {`
            ${styles.sizeFull}
            color-primary
            rounded-md
            px-4
          `}
        />
      </div>

      <input type="text" 
        id="message-content"
        name="message"
        required
        className=
        {`
          ${styles.sizeFull}
          color-primary
          rounded-md
          px-4
        `}
      />

      <label id="indication-label"
        className=''
      ><strong>*</strong>: mendatory information</label>

      <button type="submit"
        className=
        {`
          rounded-md
          color-quaternary
          py-[2px]
          px-2
        `}
      >Submit</button>

    </form>
  )
}

export default Form
