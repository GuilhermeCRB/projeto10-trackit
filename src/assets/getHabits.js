import axios from "axios";

export default function getHabits(URL, config, setHabits){

    const promise = axios.get(URL, config);
    promise.then(saveHabits); promise.catch(warnError);


    function warnError(error) {
        alert("Parece que algo de errado não está certo. Por favor, tente novamente mais tarde.");
    }

    function saveHabits(response) {
        setHabits(response.data);
    }
}