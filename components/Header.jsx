import PropTypes from 'prop-types';

const Header = ({ headerClass, headerText }) => {
  return (
    <header>
      <h3 className={ headerClass }>
        { headerText }
      </h3>
    </header>
  );
};

Header.propTypes = {
  headerClass: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
};

export default Header;
