import { useTheme } from '../../hooks/useTheme'

import lampOnImg from '../../assets/images/lamp-on.svg';
import lampOffImg from '../../assets/images/lamp-off.svg';

import './styles.scss';

export function Theme() {
    const {theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <img 
            src={isDark ? lampOffImg : lampOnImg}
            alt="Lâmpada"
            className="change-theme"
            title={(isDark ? "Acender" : "Apagar") + " a luz"}
            onClick={toggleTheme}
        />
    )
}