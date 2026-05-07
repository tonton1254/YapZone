import './SignUp.css';
import Img from '../assets/Img.svg';
import PassShowIcon from '../assets/passshow.svg'
import PassHideIcon from '../assets/PassHide.svg'

import { useState } from 'react';


function SignUp(){
    const[Icon,setIcon] = useState(PassShowIcon);
    const[InputType, SetInputType] = useState('password');
    const ToggleIcon = () =>{
        if(InputType === 'password'){
            SetInputType('text');
            setIcon(PassHideIcon);
        }
        else{
            SetInputType('password');
            setIcon(PassShowIcon);
        }
    }
    return (
        <div>
            <div className="Container">
                <div className="LeftPanel">
                    
                    <div className='Title'>
                        <label className='T1'>5</label>
                        <div className='TitleText'>
                            <label htmlFor="">Tips</label>
                            <label htmlFor="">here</label>
                        </div>
                    </div>
                    
                    <p className='Description'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="SignUpLeftPanelImg">
                        <img src={Img} alt="Img not displayed" width={200} />
                    </div>
                </div>



                <div className="RightPanel">
                    <div className='RightPanelTitle'>
                        <p>
                            Create Account
                        </p>
                    </div>
                    <form className='Form' action="">
                        <label className='Name'><input type="text" placeholder='Name' /></label>
                        <label className='Name'><input type="email" placeholder='Email Address' /></label>
                        <label className='Password'>
                            <input type={InputType} placeholder='Password' />
                            <div className='ShowPasswordIcon' onClick={ToggleIcon}>
                                <img src={Icon} alt="ShowIcon" width={20} />
                            </div>
                        </label>
                        <label className='CheckBox'>
                            <input type="checkbox"  /> 
                            <span>I agree to the terms of services and privacy policy</span>
                        </label>
                        <label className='SubmitBtn'><button type="submit">Sign Up</button></label>


                        
                        
                        
                    </form>
                    
                </div>
            </div>
        </div>
    );
}
export default SignUp