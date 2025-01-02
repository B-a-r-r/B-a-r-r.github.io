import styles from '../style'
import DropdownPhone from './DropdownPhone'

const Form = () => {
  return (
    <form id='contact-form'
      className=
      {`
        ${styles.flexCol}
        ${styles.sizeFull}
        ${styles.contentCenter}
        font-primary-regular
        color-secondary
        p-4
        space-y-4
      `}
    >
      <h2 id='form-title'
        className=
        {`
          ${styles.sizeFull}
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
          ${styles.flexRow}
          ${styles.sizeFull}
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
          ${styles.sizeFull}
          color-primary
          rounded-md
        `}
      />

      <div id="phone-info"
        className=
        {`
          ${styles.flexRow}
          ${styles.sizeFull}
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
          `}
        />
      </div>

      <input type="text" 
        id="message-content"
        name="message"
        placeholder="Message..."
        required
        className=
        {`
          ${styles.sizeFull}
          color-primary
          rounded-md
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
