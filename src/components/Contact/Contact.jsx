import { deleteContactThunk } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

export const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>
        {name} : {number}
      </p>
      <button onClick={() => dispatch(deleteContactThunk(id))}>Delete</button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
