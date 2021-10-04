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
                <div class="title-form">
                
                    <h1 className={styles.titleform}>
                        Fill out the form to upload a post
                    </h1>
                    
                </div>
            </div>
            <div class="body-container">
            
            <h2 className={styles.form1}>
                What have you lost?
            </h2>
        
            <select className={styles.formSelect}  name="catgory" id="catgory">
                <option value="" selected="selected" disabled="disabled" >Please make a selection * </option>
                
                <option value="Pet">Pet </option>
                <option value="Person">Person</option>
                
            </select>
                <div>
                    <div>
                        
                    </div>
                </div>
            </div>
    </div>
   
</body>
    )
}
 
