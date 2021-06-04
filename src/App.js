import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { IoAlarmOutline } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";

function App() {

  return (
    <div className="Container">
      <div className="col1">
        <h1>Efficient learning, made simpler.</h1>
        <p style={{fontSize:"25px", marginTop: "40px", marginBottom: "40px", opacity: "0.7"}}>Our cloud-based project management tool will enable you to attain optimum performances through precise tracking and effective networking</p>
        <span>
          <button className="btn1">Get Started</button>
          <Button className="btnwithIcon" startIcon={<PlayCircleOutlineIcon style={{color: "purple"}}/>}><a href="#">&nbsp; See&nbsp; how&nbsp; it&nbsp; works</a></Button>
        </span>
        <div className="twocols">
          <div className="subcol1">
            <IoAlarmOutline  size={40} alignmentBaseline="central" />
            <h3>Learning Tracker</h3>
            <p>Accuracte tracking to identufy your strengths and weaknesses</p>
          </div>
          <div className="subcol2">
          <IoPeople  size={40} alignmentBaseline="central" />
          <h3>Community focus</h3>
            <p>Community focus boosts your presence in professional networks</p>
          </div>
        </div>
      </div>
      <div className="col2">
        <div className="header" style={{display:"flex", justifyContent:"flex-end"}}>
          <button >Product</button>
          <button>Pricing</button>
          <button>Contact</button>
          <button>Sign In</button>
        </div>
        <img src="data:image/jpeg;base64,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"/>
      </div>
    </div>
  );
}

export default App;
