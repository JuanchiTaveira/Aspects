import styles from './RoundedBlackCheckbox.module.scss';

export const RoundedBlackCheckbox = (props: {id: string, value?: string, name?: string, type: "checkbox" | "radio"}) => {
    return (
        <input className={`form-check-input ${styles.roundedBlackCheckbox}`} type={props.type} id={props.id} value={props.value} name={props.name}/>
    );
};

export default RoundedBlackCheckbox;