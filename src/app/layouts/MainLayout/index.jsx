import React, {useState} from "react";
// Node
import CssBaseline from '@material-ui/core/CssBaseline';
// Areas
import ContentArea from '../../areas/ContentArea';
import HeaderArea from '../../areas/HeaderArea';
import LeftMenuArea from '../../areas/LeftMenuArea';
// Own
import useStyleMui from "./styles/style.mui";

/*
 * Шаблон "Главный"
 */

// Экспорт контекста
export const MainLayoutContext = React.createContext();

const MainLayout = (props) => {
    const styleMui = useStyleMui();      
    // Ширина левой панели меню
    const drawerWidth = 300;
    
    const [panelOpenContext, setPanelOpenContext] = useState(false);
    
    return (
        <div className={styleMui.root}>
            <CssBaseline />            
            <MainLayoutContext.Provider value={[panelOpenContext, setPanelOpenContext]}>
                <HeaderArea drawerWidth={drawerWidth} />
                <LeftMenuArea drawerWidth={drawerWidth} />
            </MainLayoutContext.Provider>            
            <ContentArea />
        </div>
    );
}

// Экспорт шаблона
export default MainLayout;