import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Container from './FormComps/container'
import NavbarForm from './FormComps/NavbarForm'

export default function form1()  {
    return (
<body>
    <div>
        <div>
                <ul>   
                </ul>
           
        </div>
    </div>
    <div>
                <div>
                    <div >
                    
                        <h1 className={styles.titleform}>
                        Lost person/pet description
                        </h1>
                        
                    </div>
                </div>
                <div class="body-container">
                
        
         
                    <div class="inputbar">
                    <form>
                        <label for="fname"></label>
                        <input  type="text" id="fname" name="fname" placeholder="First Name">
                       </input>
                        <label for="lname"></label>
                        <input  type="text" id="lname" name="lname" placeholder="Last Name">
                            </input>
                        <input type="submit" value="Submit">
                            </input>
                    </form>
                    </div>
                
            
                    <div>
                        <div >
                            
                        </div>
                    </div>
                    
      
                    <div>
                        <div>
                            
                        </div>
                    </div>
                </div>

   </div>
</body>
    )
}