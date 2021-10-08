import { Item } from "./ContactListItem.styled";

function ContactListItem({ id, name, number, onDeleteContact }) {
  return (
    <Item>
      {name}: {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </Item>
  );
}

export default ContactListItem;
