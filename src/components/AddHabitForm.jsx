import styledComponents from "styled-components";

export default function AddHabitForm({setAddHabit}) {
    return (
        <DivStyle>
            <input type="text" />
            <div className="week-days">
                <div>D</div>
                <div>S</div>
                <div>T</div>
                <div>Q</div>
                <div>Q</div>
                <div>S</div>
                <div>S</div>
            </div>
            <div className="add-form-buttons">
                <button onClick={() => setAddHabit(false)}>Cancelar</button>
                <button>Salvar</button>
            </div>
        </DivStyle>
    );
}

const DivStyle = styledComponents.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 180px;
    margin-bottom: 29px;
    background-color: var(--background-addHabit-form);

    .week-days{
        display: flex;
    }

    .add-form-buttons{
        position: absolute;
        bottom: 0;
        right: 0;
        width: 176px;
    }
`