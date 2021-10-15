import './home.css'

export default function Home(props) {

  return (
    <>
      {props.userData.length !== 0 && (
        <div className="home">
          <h1>- Welcome -</h1>
          <ul>
            <li>You can click User List to check user card.</li>
            <li>
              Click user card it will show detail information of the user.
            </li>
            <li>
              You can also access user information by clicking Address List.
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
