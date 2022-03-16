import React,{useState} from 'react';
import {db} from '../firebase'
import firebase from 'firebase';
import Select from 'react-select';

const options = [
    { value: 'web', label: 'Web development' },
    { value: 'App', label: 'App development' },
    { value: 'Seo', label: 'SEO' },
    { value: 'UI', label: 'UI UX DESIGN' },
  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 20,
    })}
const Contact = () => {
    const[name,setName]=useState("")
    const[subject,setSubject]=useState("")
    const[email,setEmail]=useState("")
    const [selectedOption, setSelectedOption] = useState(null);
    const[extra,setExtra]=useState("")
    const[message,setMessage]=useState("")

    const send =(e)=>{
        e.preventDefault()
        if(name,subject,email,message){
       
        db.collection('messages').add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            name:name,
            email:email,
            phone:subject,
            service:selectedOption.value,
            extra:extra,
            message:message,
        })
        alert("Message Sent We Will Be Intouch Soon")
        setName("")
        setSubject("")
        setEmail("")
        setMessage("")
        setExtra("")
    }else{
        alert("please fill out the entire form")
    }
    }
    return(
        <>
            <div className="contact section-title mt-5">
                <div className="container text-white">
                    <div className="row align-items-center">
                        <div className="col-md-7 mx-auto">
                            <div className="contact-title mb-5 mt-5">
                                <h1 className="title-font title-font-size">
                                Contact
                                </h1>
                                <p className="mt-4 mb-4 title-font-2">
                                    Say Hello. If you want to extend some info, 
                                    do not hesitate to fill this form, we love to 
                                    say ‘Hello Mate’.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-8 mx-auto text-white">
                            <div className="contact-form mb-5 mt-5">
                                <form onSubmit={send}>
                                    <div className="form-group">
                                        <div className="col-12">
                                            <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-12">
                                            <input type="text" className="form-control" placeholder="Phone Number" value={subject} onChange={(e)=>{setSubject(e.target.value)}}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-12">
                                            <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                        </div>
                                    </div>
                                    <h3>Select A Service</h3>
                                    <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        styles={customStyles}
      />
                                    <div className="form-group">
                                        <div className="col-12">
                                            <textarea className="form-control" placeholder="Message" rows="4" value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-12">
                                            <textarea className="form-control" placeholder="What else is on your mind?" rows="4" value={extra} onChange={(e)=>{setExtra(e.target.value)}}/>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="btn mt-5">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;