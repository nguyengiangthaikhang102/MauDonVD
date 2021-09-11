import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Picker} from '@react-native-picker/picker';
import {RadioButton} from 'react-native-paper';

const ReviewSchema = yup.object({
  tên: yup.string().required(),
  ngày_sinh: yup.string().required(),
  nơi_sinh: yup.string().required(),
  lớp: yup.string().required(),
  khoa: yup.string().required(),
  khóa: yup.string().required(),
  ten_ba_mẹ: yup.string().required(),
  hộ_khẩu: yup.string().required(),
  dc_tp: yup.string().required(),
  dc_quận_huyện: yup.string().required(),
  dc_phường_xã: yup.string().required(),
  Thuộc_đối_tượng: yup.string().required(),

});
function sample(token2) {
  console.log(token2);
  console.log(typeof token2);
  //   if (token2 === -1) {
  //     Alert.alert('chua nhap token');
  //     return;
  //   }
  fetch('http://185.70.198.139:4000/send_mail/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: token2,
    }),
  })
    .then(response => response.text())
    .then(responseData => {
      console.log(responseData);
    })
    .done();
}

export default function DonXinCapBuHocPhi({navigation}) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView>
        <View style={styles.containers}>
          <Formik
            enableReinitialize={true}
            validationSchema={ReviewSchema}
            initialValues={{
              tên: '',
              ngày_sinh: '',
              nơi_sinh: '',
              lớp: '',
              khoa: '',
              khóa: '',
              ten_ba_mẹ: '',
              hộ_khẩu: '',
              dc_tp: '',
              dc_quận_huyện: '',
              dc_phường_xã: '',
              Thuộc_đối_tượng: '',             
            }}
            onSubmit={(val, actions) => {
              sample(val);
              actions.resetForm();
              navigation.navigate('Dk thanh cong');
            }}>
            {props => (
              <View>
                {/* tên */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.tên && props.errors.tên
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Họ và tên: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Họ tên"
                  onChangeText={props.handleChange('tên')}
                  onBlur={props.handleBlur('tên')}
                  value={props.values.tên}
                />
                {/* ngày sinh */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.ngày_sinh && props.errors.ngày_sinh
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Ngày sinh: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="ngày sinh"
                  onChangeText={props.handleChange('ngày_sinh')}
                  onBlur={props.handleBlur('ngày_sinh')}
                  value={props.values.ngày_sinh}
                />

                {/* Nơi sinh */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.nơi_sinh && props.errors.nơi_sinh
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Nơi sinh: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Nơi sinh"
                  onChangeText={props.handleChange('nơi_sinh')}
                  onBlur={props.handleBlur('nơi_sinh')}
                  value={props.values.nơi_sinh}
                />
                 {/* lớp */}
                 <Text style={{color: 'crimson'}}>
                  {props.touched.lớp && props.errors.lớp
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Lớp: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="lớp"
                  onChangeText={props.handleChange('lớp')}
                  value={props.values.lớp}
                  onBlur={props.handleBlur('lớp')}
                />

                {/* Khoa */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.khoa && props.errors.khoa
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Khoa: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="khoa"
                  onChangeText={props.handleChange('khoa')}
                  value={props.values.khoa}
                  onBlur={props.handleBlur('khoa')}
                />

                {/* Khóa */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.khóa && props.errors.khóa
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Khóa: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="khóa"
                  onChangeText={props.handleChange('khóa')}
                  value={props.values.khóa}
                  onBlur={props.handleBlur('khóa')}
                />

                 {/* Họ tên cha/mẹ học sinh, sinh viên:  */}
                 <Text style={{color: 'crimson'}}>
                  {props.touched.ten_ba_mẹ && props.errors.ten_ba_mẹ
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Họ tên cha/mẹ học sinh, sinh viên: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Họ tên cha/mẹ học sinh, sinh viên:"
                  onChangeText={props.handleChange('ten_ba_mẹ')}
                  value={props.values.ten_ba_mẹ}
                  onBlur={props.handleBlur('ten_ba_mẹ')}
                />

                {/* Hộ khẩu thường trú (ghi đầy đủ): * */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.hộ_khẩu && props.errors.hộ_khẩu
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Hộ khẩu thường trú (ghi đầy đủ): </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Hộ khẩu thường trú (ghi đầy đủ)"
                  onChangeText={props.handleChange('hộ_khẩu')}
                  value={props.values.hộ_khẩu}
                  onBlur={props.handleBlur('hộ_khẩu')}
                />

                {/* Địa chỉ (Thành phố) */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.dc_tp && props.errors.dc_tp
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Tỉnh/ThànhPhố: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Thành phố"
                  onChangeText={props.handleChange('dc_tp')}
                  value={props.values.dc_tp}
                  onBlur={props.handleBlur('dc_tp')}
                />

                {/* địa chỉ (Quận/Huyện) */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.dc_quận_huyện && props.errors.dc_quận_huyện
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Quận/Huyện: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Quận/huyện"
                  onChangeText={props.handleChange('dc_quận_huyện')}
                  value={props.values.dc_quận_huyện}
                  onBlur={props.handleBlur('dc_quận_huyện')}
                />

                {/* địa chỉ (Phường/Xã) */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.dc_phường_xã && props.errors.dc_phường_xã
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Phường/Xã: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Phường/Xã"
                  onChangeText={props.handleChange('dc_phường_xã')}
                  value={props.values.dc_phường_xã}
                  onBlur={props.handleBlur('dc_phường_xã')}
                />

                 {/*Thuộc đối tượng: */}
                 <Text style={{color: 'crimson'}}>
                  {props.touched.Thuộc_đối_tượng && props.errors.Thuộc_đối_tượng
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Thuộc đối tượng: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Thuộc đối tượng"
                  onChangeText={props.handleChange('Thuộc_đối_tượng')}
                  value={props.values.Thuộc_đối_tượng}
                  onBlur={props.handleBlur('Thuộc_đối_tượng')}
                />

               
               
                      

                <TouchableOpacity
                  onPress={props.handleSubmit}
                  style={styles.roundButton1}>
                  <Text style={[styles.textWhite, styles.font20]}>Nộp đơn</Text>
                </TouchableOpacity>
                
              
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    marginTop: 10,
    marginHorizontal: 20,
  },
  input: {
    padding:10,
    marginBottom: 20,
    backgroundColor: 'white',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  monno:{
    marginBottom: 20,
    padding:40,
    backgroundColor: 'white',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  font20: {
    fontSize: 20,
  },
  
  picker: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    backgroundColor: 'white',
    marginBottom: 20,
  },
  radio: {
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginBottom: 25,
  },
  flexDirRow: {
    flexDirection: 'row',
  },
  font22: {
    fontSize: 22,
  },
  roundButton1: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#289EF4',
    marginHorizontal: 50,
    marginBottom: 10,
  },
  textWhite: {
    color: 'white',
  },
});