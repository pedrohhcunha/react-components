import styles from './styles.module.scss';
import { Backdrop } from "../Backdrop";
import { useEffect, useRef } from 'react';

interface Props {
    children: React.ReactNode;
    active?: boolean;
    onClose: () => void;
    position?: 'center' | 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    size?: 'small' | 'medium' | 'large';
    backdropBlur?: boolean;
    fullScreen?: boolean;
    closeOnClickOutside?: boolean;
    closeOnPressEscape?: boolean;
    animation?: 'fade' | 'shake' | 'slide' | 'none';
}

export function Modal(props: Props): JSX.Element {
    const {
        children,
        active = false,
        onClose,
        position = 'center',
        size = 'medium',
        backdropBlur = false,
        fullScreen = false,
        closeOnClickOutside = true,
        closeOnPressEscape = true,
        animation = 'fade'
    } = props;
    const boxRef = useRef<HTMLDivElement>(null);

    const handleBackdropClick = () => {
        const boxIsHovered = boxRef.current && !boxRef.current.matches(':hover');
        if (boxIsHovered && closeOnClickOutside) onClose();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && closeOnPressEscape) onClose();
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <Backdrop
            active={active}
            onClick={handleBackdropClick}
            position={position}
            blur={backdropBlur}
            noPadding={fullScreen}
        >
            <div
                className={`
                    ${styles.box}
                    ${styles[size]}
                    ${styles[position]}
                    ${fullScreen ? styles.fullScreen : ''}
                    ${animation !== 'none' ? styles[animation] : ''}
                    ${active ? styles.active : ''}
                `}
                ref={boxRef}
            >
                {children}
            </div>
        </Backdrop>
    )
}