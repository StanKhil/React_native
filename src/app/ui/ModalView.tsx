import { Image, Text, View } from 'react-native-web';
import {Pressable, StyleSheet} from 'react-native'
import { useContext} from 'react';
import ProjButton from '../../features/ui/ProjeButton'
import AppContext from '../../features/context/AppContext';
import type { ModalData } from '../../features/types/ModalData';

export default function ModalView({data} : {data: ModalData|null}){
  const {showModal} = useContext(AppContext);
  
  return <View style={[styles.fullScreen, {display: (data == null ? 'none' : 'flex')}]}>
    <View style={styles.modal}>
      <Pressable onPress={() => showModal(null)} style={styles.clsoeButton}>
          <Image source="/img/close.png" style={styles.clsoeButtonImg}/>
      </Pressable>
      <Text style={styles.modalTitle}>{data?.title}</Text>
      <Text style={styles.modalMessage}>{data?.message}</Text>
      {data?.buttons && data.buttons.map(btn => <ProjButton key={btn.title} title={btn.title} action={btn.action} type={btn.type}/>)}
    </View>
  </View>
}

const styles = StyleSheet.create({
  fullScreen: {
    width: "100%",
    height: "100%",
    backgroundColor: "#88b0b0b0",
    position: "absolute",
    left: 0,
    top: 0,
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'column'
  },
  modal:{
    paddingTop: 40,
    width: "30%",
    minHeight: "30%",
    backgroundColor: "#f1eaeaff",
    borderRadius: 10
  },
  clsoeButton:{
    width: 40,
    height: 40,
    position: "absolute",
    top: 0,
    right: 0
  },
  clsoeButtonImg:{
    width: 20,
    height: 20,
    position: "absolute",
    top: 10,
    right: 10
  },
  modalTitle:{
    fontWeight: 700,
    fontSize: 22,
    textAlign: "center"
  },
  modalMessage:{
    textAlign: "center",
    paddingVertical: 16,
    paddingHorizontal: 10,
    fontSize: 14
  }
});