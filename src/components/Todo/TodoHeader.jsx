import styles from './TodoHeader.module.scss'

function TodoHeader (){
    const today = new Date ()
    const options = {weekday:'short',day:'numeric',month:'short'}
    return (
        <div className={styles.header}>
            <h1 className={styles.herder__text}>Inbox</h1>
            <span className={styles.header__date}>{today.toLocaleDateString('en-US',options)}</span>
        </div>
    )
}

export default TodoHeader;