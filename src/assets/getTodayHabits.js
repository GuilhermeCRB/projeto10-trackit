import axios from "axios";

export default function getTodayHabits(URL, config, setTodayHabits, setDailyProgress) {
    const promise = axios.get(URL, config);
    promise.then(displayTodayHabits); promise.catch(warnError);

    function warnError(error) {
        alert("Parece que algo de errado não está certo. Por favor, tente novamente mais tarde.");
    }

    function displayTodayHabits(response) {
        setTodayHabits(response.data);

        const todayHabitsNumber = response.data.length;
        const doneHabits = response.data.filter(habit => habit.done);
        const doneHabitsNumber = doneHabits.length;
    
        setDailyProgress( 100 * (doneHabitsNumber / todayHabitsNumber) );
    }

}