import { useNavigate } from 'react-router-dom';
import PriceIcon from '../../assets/img/price_icon.png';
import Dropdown from 'react-bootstrap/Dropdown';

const MatchHistoryData = props => {
  let navigate = useNavigate();

  const goEditTour = () => {
    navigate('/edit-tournament', { replace: true });
  };

  const { tournament } = props;

  return (
    <tr>
      <td colSpan={2}>
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <label>{tournament.name}</label>
          </div>
        </div>
      </td>
      <td>
        <div className="results">
          <span>{tournament.rule}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <img src={PriceIcon} alt="User-Image" />
          </div>
          <div className="profile_with_text">
            <h6 className="mb-0">{tournament.entryFee}</h6>
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <img src={PriceIcon} alt="User-Image" />
          </div>
          <div className="profile_with_text">
            <h6 className="mb-0">{tournament.prizePool}</h6>
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <div className="profile_with_text">
            <h6 style={{ paddingTop: '4px' }} className="mb-0">
              {tournament.players.length}/{tournament.noOfPlayers}
            </h6>
          </div>
        </div>
      </td>
      <td colSpan={4}>
        <div className="d-flex align-items-center">
          <div className="profile_with_text dropdown_for_action">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={goEditTour}>Edit</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default MatchHistoryData;
