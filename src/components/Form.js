import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Alert } from 'react-bootstrap'

const PriceForm = () => {
    const [fertilizer, setFertilizer] = useState('Superlannoite')
    const [lights, setLights] = useState(1)
    const [hours, setHours] = useState(20)
    const [form, setForm] = useState(true)
    const [berries, setBerries] = useState(0)
    const [costs, setCosts] = useState(0)
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
       e.preventDefault()
       
       if(hours > 120 || hours < 20){
            setError(
            <Alert variant="danger" className="alert">
                Tuntien pitää olla välillä 20-120!
            </Alert>)

            setTimeout(() => {
                setError(null)
            }, 5000)

            return
       }

        if(fertilizer === 'Superlannoite'){
            setCosts(2500 + lights * 45 + hours * 25)
            setBerries(Math.floor(2000 * Math.pow(1.15, lights - 1) + (hours - 20) * 28))
        }else if (fertilizer === 'Tavallinen lannoite'){
            setCosts(100 + lights * 45 + hours * 25)
            setBerries(Math.floor(680 * Math.pow(1.15, lights - 1) + (hours - 20) * 28))
        }else {
            setCosts(20 + lights * 45 + hours * 25)
            setBerries(Math.floor(400 * Math.pow(1.15, lights - 1) + (hours - 20) * 28))
        }

        setForm(false)
    }

    if (form){
        return (
            <div>
                {error}
                <div id="formdiv">
               
                    <Form className="form" onSubmit={handleSubmit}>
                        <Form.Label>Fertilizer: </Form.Label>
                        <Form.Control size="lg" value={fertilizer} as="select" onChange={(event) => setFertilizer(event.target.value)}>
                            <option>Superlannoite</option>
                            <option>Tavallinen lannoite</option>
                            <option>Lirulannoite</option>
                        </Form.Control>
                        <br />
                        <Form.Label>Valaisimien määrä: </Form.Label>
                        <Form.Control size="lg" value={lights} as="select" onChange={(event) => setLights(event.target.value)}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </Form.Control>
                        <br />
                        <Form.Label>Työtuntien määrä: </Form.Label>
                        <Form.Control size="lg" as="input" type="number" value={hours} onChange={(event) => setHours(event.target.value)}></Form.Control>
                        <br />
                        <Button variant="primary" type="submit">Laske kustannukset</Button>
                    </Form>
                </div>
            </div>
            )
    }else {
        return(
            <div id="formdiv">
                <div className="results">
                    <h1>Arvioidut kustannukset</h1>
                    <p>Näillä arvoilla marjoja tulee {berries} kg, {costs}€ hintaan.</p>
                    <p>Minimikilohinnaksi muodostuu siis <b>{costs / berries}€/kg</b> </p>
                    <Button variant="primary" onClick={() => setForm(true)}>Laske uusi</Button>
                </div>
            </div>
        )
    }
    
}

export default PriceForm