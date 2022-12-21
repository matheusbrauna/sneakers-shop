import styles from './styles.module.css'

export function Skeleton() {
  return (
    <div className="w-[443px] h-[426px]">
      <div className={`${styles.skeleton} bg-neutral-700 bg-skeleton`}></div>
    </div>
  )
}
