import { useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step5 from "../components/Step5";

const Wizard = () => {
    const [step, setStep] = useState(1);
    const [dataForm, setDataform] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        institution: "",
        career: "",
        startDate: "",
        finalDate: "",
        company: "",
        job: "",
        startDateJob: "",
        finalDateJob: "",
        biography: '',
        nameRef1: "",            
        emailRef1: "",
        nameRef2: "",   
        emailRef2: "",            
        phoneRef1: "",                
        phoneRef2: ""

    })

    const nextPage = (values:any) => {
        setDataform(prevState=>({...prevState, ...values}))
        setStep(step => step + 1);
    }
    const prevPage = () => {
        setStep(step => step - 1);
    }
    switch (step) {
        case 1:
            return <Step1 next={nextPage} data={dataForm}/>;
        case 2:
            return <Step2 next={nextPage} prev={prevPage} data={dataForm}/>;
        case 3:
            return <Step3 next={nextPage} prev={prevPage} data={dataForm}/>;
        case 4:
            return <Step4 next={nextPage} prev={prevPage} data={dataForm}/>;
        case 5:
            return <Step5 next={nextPage} prev={prevPage} data={dataForm}/>;

        default:
            return null;
    }    
};

export default Wizard;
