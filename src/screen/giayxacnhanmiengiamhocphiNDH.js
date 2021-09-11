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
  mssv: yup.string().required(),
  ngày_sinh: yup.string().required(),
  hộ_khẩu: yup.string().required(),
  Hien_tại_là_SV_Năm_thứ: yup.string().required(),
  Học_Kỳ: yup.string().required(),
  lớp: yup.string().required(),
  Năm_hoc: yup.string().required(),
  khoa: yup.string().required(),
  Nganh_học: yup.string().required(),
  khóa: yup.string().required(),
  Hệ_đào_tạo: yup.string().required(),
  Loại_hình_đào_tạo: yup.string().required(),
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

export default function GiayXacNhanMienGiamHPNDH({navigation}) {
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
              mssv: '',
              ngày_sinh: '',
              giới_tính: 'nam',
              hộ_khẩu: '',
              Hien_tại_là_SV_Năm_thứ: '',
              Học_Kỳ: '',
              lớp: '',
              Năm_hoc: '',
              khoa: '',
              Nganh_học: '',
              khóa: '',
              Hệ_đào_tạo: '',
              Loại_hình_đào_tạo: '',           
              
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
                  placeholder="Họ và tên"
                  onChangeText={props.handleChange('tên')}
                  onBlur={props.handleBlur('tên')}
                  value={props.values.tên}
                />
                 {/* MSSV */}
                 <Text style={{color: 'crimson'}}>
                  {props.touched.mssv && props.errors.mssv
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>MSSV: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="MSSV"
                  onChangeText={props.handleChange('mssv')}
                  value={props.values.mssv}
                  onBlur={props.handleBlur('mssv')}
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
                  placeholder="Ngày sinh"
                  onChangeText={props.handleChange('ngày_sinh')}
                  onBlur={props.handleBlur('ngày_sinh')}
                  value={props.values.ngày_sinh}
                />

                {/* giới tính */}
                <Text style={styles.font20}>Giới Tính:</Text>                
                <View style={styles.picker}>
                  <Picker
                    selectedValue={props.values.giới_tính}
                    onValueChange={props.handleChange('giới_tính')}>
                    <Picker.Item label="Nam" value={'Nam'} />
                    <Picker.Item label="Nữ" value={'Nữ'} />
                  </Picker>
                </View>

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

                  {/*Hien_tại_là_SV_Năm_thứ */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.Hien_tại_là_SV_Năm_thứ && props.errors.Hien_tại_là_SV_Năm_thứ
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Hiện là sinh viên năm thứ: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Hiện là sinh viên năm thứ"
                  onChangeText={props.handleChange('Hien_tại_là_SV_Năm_thứ')}
                  value={props.values.Hien_tại_là_SV_Năm_thứ}
                  onBlur={props.handleBlur('Hien_tại_là_SV_Năm_thứ')}
                />
              
                {/*Học Kỳ*/}
                <Text style={{color: 'crimson'}}>
                  {props.touched.Học_Kỳ && props.errors.Học_Kỳ
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Học kỳ: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Học kỳ"
                  onChangeText={props.handleChange('Học_Kỳ')}
                  value={props.values.Học_Kỳ}
                  onBlur={props.handleBlur('Học_Kỳ')}
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
                 {/* Năm Học*/}
                 <Text style={{color: 'crimson'}}>
                  {props.touched.Năm_hoc && props.errors.Năm_hoc
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Năm học: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Năm học"
                  onChangeText={props.handleChange('Năm_hoc')}
                  value={props.values.Năm_hoc}
                  onBlur={props.handleBlur('Năm_hoc')}
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

                {/*Ngành Học: */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.Nganh_học && props.errors.Nganh_học
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Ngành Học:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ngành Học"
                  onChangeText={props.handleChange('Nganh_học')}
                  value={props.values.Nganh_học}
                  onBlur={props.handleBlur('Nganh_học')}
                />
               
                 {/* Khóa */}
                 <Text style={{color: 'crimson'}}>
                  {props.touched.khóa && props.errors.khóa
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Khóa Học: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Khóa Học"
                  onChangeText={props.handleChange('khóa')}
                  value={props.values.khóa}
                  onBlur={props.handleBlur('khóa')}
                />
                
                {/*Hệ đào tạo (Đại học , cao đẳng, dạy nghề)*/}
                  <Text style={{color: 'crimson'}}>
                  {props.touched.Hệ_đào_tạo && props.errors.Hệ_đào_tạo
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Hệ đào tạo:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Hệ đào tạo"
                  onChangeText={props.handleChange('Hệ_đào_tạo')}
                  value={props.values.Hệ_đào_tạo}
                  onBlur={props.handleBlur('Hệ_đào_tạo')}
                />
                 {/* Loại hình đào tạo: */}
                 <Text style={{color: 'crimson'}}>
                  {props.touched.Loại_hình_đào_tạo && props.errors.Loại_hình_đào_tạo
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Loại hình đào tạo: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Loại hình đào tạo"
                  onChangeText={props.handleChange('Loại_hình_đào_tạo')}
                  value={props.values.Loại_hình_đào_tạo}
                  onBlur={props.handleBlur('Loại_hình_đào_tạo')}
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
  font20: {
    fontSize: 20,
  },
  
  picker: {
    padding:10,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
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
