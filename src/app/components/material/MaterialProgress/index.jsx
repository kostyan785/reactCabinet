import React from 'react';
// Node
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
// Own
import styleMod from './styles/style.module.css';

/*
 * Компонент "Прогресс" (обертка над MaterialUI)
 */

// Входящие свойства
const propTypes = {
    // цвет прогресса [синий, красный]
    color: PropTypes.oneOf(['primary', 'secondary']),
    // тип прогресса [переливающийся, сплошной]
    variant: PropTypes.oneOf(['indeterminate', 'determinate']),
};

// Свойства по умолчанию
const defaultProps = {
    color: 'primary',
    variant: 'indeterminate',
};

// Экспорт компонента
export const MaterialProgress = (props) => {
    // Преобразование пропсов в локальные константы
    const {color, variant, loadingComplete} = props;
    
    return (       
        <>
            {   
                // Отрисовка прогресса только если загрузка в процессе
                loadingComplete === false 
                && 
                <div className={styleMod.progressWrapper}>                    
                    <LinearProgress variant={variant} color={color} />
                </div>
            }
        </>
    );
}

// Описание свойств и дефолтные значения компонента
MaterialProgress.propTypes = propTypes;
MaterialProgress.defaultProps = defaultProps;

// Маппинг стейта в пропсы компонента
let mapStateToProps = (state) => {
    return {
        loadingComplete: state.loadStore.loadingComplete        
    }
}

// Экспорт контейнера компонента                
export default connect(mapStateToProps)(MaterialProgress);