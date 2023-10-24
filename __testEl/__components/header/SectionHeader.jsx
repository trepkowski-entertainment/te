import styles from './header.module.scss'


export const SectionHeader = ({children}) => {
    return( 
    <div className={styles.sectionHead}>
        {children}
    </div>
    )
}