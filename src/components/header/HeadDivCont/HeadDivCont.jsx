import styles from './headDivCont.module.scss'


export const HeadDivCont = ({children}) => {
    return(
        <div className={styles.headDivCont}>
        {children}
        </div>
    )
    
}