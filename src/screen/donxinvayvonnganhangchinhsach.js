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
  CMND: yup.string().required(),
  ngày_cấp: yup.string().required(),
  nơi_cấp: yup.string().required(),
  Mã_trường: yup.string().required(),       
  Tên_Trường: yup.string().required(),
  Nganh_học: yup.string().required(),
  Hệ_đào_tạo: yup.string().required(),
  Loại_hình_đào_tạo: yup.string().required(),
  mssv: yup.string().required(),
  lớp: yup.string().required(),
  khoa: yup.string().required(),
  khóa: yup.string().required(),
  Ngày_nhập_học: yup.string().required(),
  Thời_gian_ra_trường: yup.string().required(),
  Số_tiền_học_phí: yup.string().required(),
  Thuộc_diện: yup.string().required(),
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

export default function DonXinVayVonNHCS({navigation}) {
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
              giới_tính: 'nam',
              CMND: '',
              ngày_cấp: '',
              nơi_cấp: '',
              Mã_trường: '',
              Tên_Trường: '',
              Nganh_học: '',
              Hệ_đào_tạo: '',
              Loại_hình_đào_tạo: '',
              mssv: '',
              lớp: '',
              khoa: '',
              khóa: '',
              Ngày_nhập_học: '',
              Thời_gian_ra_trường: '',
              Số_tiền_học_phí: '',
              Thuộc_diện: 'Không miễn giảm',
              Thuộc_đối_tượng: 'Không mồ côi',
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
                                
                  {/*CMND */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.CMND && props.errors.CMND
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>CMND: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="CMND"
                  onChangeText={props.handleChange('CMND')}
                  value={props.values.CMND}
                  onBlur={props.handleBlur('CMND')}
                />
                {/*Ngày Cấp */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.ngày_cấp && props.errors.ngày_cấp
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Ngày Cấp: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ngày Cấp"
                  onChangeText={props.handleChange('ngày_cấp')}
                  value={props.values.ngày_cấp}
                  onBlur={props.handleBlur('ngày_cấp')}
                />
                {/*Nơi Cấp */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.nơi_cấp && props.errors.nơi_cấp
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Nơi Cấp: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Nơi Cấp"
                  onChangeText={props.handleChange('nơi_cấp')}
                  value={props.values.nơi_cấp}
                  onBlur={props.handleBlur('nơi_cấp')}
                />
                 {/*Mã trường theo học (mã quy ước trong tuyển sinh): */}
                 <Text style={{color: 'crimson'}}>
                  {props.touched.Mã_trường && props.errors.Mã_trường
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Mã trường theo học (mã quy ước trong tuyển sinh): </Text>
                <TextInput
                  style={styles.input}
                  placeholder="CDD0223"
                  onChangeText={props.handleChange('Mã_trường')}
                  value={props.values.Mã_trường}
                  onBlur={props.handleBlur('Mã_trường')}
                />
                 {/*Tên trường: */}
                 <Text style={{color: 'crimson'}}>
                  {props.touched.Tên_Trường && props.errors.Tên_Trường
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Tên trường: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Cao đẳng Viễn Đông"
                  onChangeText={props.handleChange('Tên_Trường')}
                  value={props.values.Tên_Trường}
                  onBlur={props.handleBlur('Tên_Trường')}
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

                  {/*Hệ đào tạo (Đại học , cao đẳng, dạy nghề)*/}
                   <Text style={{color: 'crimson'}}>
                  {props.touched.Hệ_đào_tạo && props.errors.Hệ_đào_tạo
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Hệ đào tạo (Đại học , cao đẳng, dạy nghề):</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Hệ đào tạo"
                  onChangeText={props.handleChange('Hệ_đào_tạo')}
                  value={props.values.Hệ_đào_tạo}
                  onBlur={props.handleBlur('Hệ_đào_tạo')}
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

                {/* MSSV */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.mssv && props.errors.mssv
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>MSSV: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="mssv"
                  onChangeText={props.handleChange('mssv')}
                  value={props.values.mssv}
                  onBlur={props.handleBlur('mssv')}
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
                {/* Ngày Nhập học */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.Ngày_nhập_học && props.errors.Ngày_nhập_học
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Ngày nhập học: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ngày nhập học"
                  onChangeText={props.handleChange('Ngày_nhập_học')}
                  value={props.values.Ngày_nhập_học}
                  onBlur={props.handleBlur('Ngày_nhập_học')}
                />

                {/* Thời gian ra trường */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.Thời_gian_ra_trường && props.errors.Thời_gian_ra_trường
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Thời gian ra trường: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Thời gian ra trường"
                  onChangeText={props.handleChange('Thời_gian_ra_trường')}
                  value={props.values.Thời_gian_ra_trường}
                  onBlur={props.handleBlur('Thời_gian_ra_trường')}
                />

                 {/* Số tiền học phí / học kì (đồng): */}
                 <Text style={{color: 'crimson'}}>
                  {props.touched.Số_tiền_học_phí && props.errors.Số_tiền_học_phí
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Số tiền học phí / học kì (đồng): </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Số tiền học phí / học kì (đồng)"
                  onChangeText={props.handleChange('Số_tiền_học_phí')}
                  value={props.values.Số_tiền_học_phí}
                  onBlur={props.handleBlur('Số_tiền_học_phí')}
                />

                {/* Thuộc diện */}
                <Text style={styles.font20}>
                Thuộc diện:
                </Text>
                <RadioButton.Group
                  onValueChange={props.handleChange('Thuộc_diện')}
                  value={props.values.Thuộc_diện}>
                  <View style={styles.radio}>
                    <View style={styles.flexDircolum}>
                      <Text style={styles.font22}>Không miễn giảm </Text>
                      <RadioButton value="Không miễn giảm" />
                    </View>
               
                    <View style={styles.flexDircolum}>
                      <Text style={styles.font22}>Giảm học phí</Text>
                      <RadioButton value="Giảm học phí" />
                    </View>
                    <View style={styles.flexDircolum}>
                      <Text style={styles.font22}>Miễn học phí </Text>
                      <RadioButton value="Miễn học phí " />
                    </View>
                  </View>
                </RadioButton.Group>
                {/* Thuộc đối tượng  */}
                <Text style={styles.font20}>
                Thuộc đối tượng :
                </Text>
                <RadioButton.Group
                  onValueChange={props.handleChange('Thuộc_diện')}
                  value={props.values.Thuộc_diện}>
                  <View style={styles.radio}>
                    <View style={styles.flexDirRow}>
                      <Text style={styles.font22}>Mồ cô</Text>
                      <RadioButton value="Mồ cô" />
                    </View>
               
                    <View style={styles.flexDirRow}>
                      <Text style={styles.font22}>Không mồ cô</Text>
                      <RadioButton value="Không mồ cô" />
                    </View>
                    
                  </View>
                </RadioButton.Group>
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
  radio: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 25,
  },
  flexDirRow: {
    
    flexDirection: 'row',
  },
  flexDircolum:{
    flexDirection: 'column',
  },
  font22: {
    fontSize: 18,
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
