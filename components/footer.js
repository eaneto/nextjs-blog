
import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
      <div>
        <hr />
        <footer className={styles.footer}>
            <p>2020 - {new Date().getFullYear()}</p>
        </footer>
      </div>
  )
}