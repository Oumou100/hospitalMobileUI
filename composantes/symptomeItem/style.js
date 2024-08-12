import { StyleSheet } from "react-native";
import {PADDING} from '../../outils/constantes'
export const styles = StyleSheet.create({
    item:{
        marginRight:15,
        flexDirection: 'row',
        backgroundColor:'white',
        alignItems:'center',
        borderRadius: 5,
        paddingHorizontal:PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },
    itemImg:{
        width:50,
        height: 40,
    }
})
