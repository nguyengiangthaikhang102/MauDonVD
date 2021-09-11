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
  mssv: yup.string().required(),
  lớp: yup.string().required(),
  khoa: yup.string().required(),
  khóa: yup.string().required(),
  Loại_hình_đào_tạo: yup.string().required(),
  Ngày_nhập_học: yup.string().required(),
  Thời_gian_ra_trường: yup.string().required(),
  ten_đứng_ra_vay_vốn: yup.string().required(),
  dc_tp: yup.string().required(),
  dc_quận_huyện: yup.string().required(),
  dc_phường_xã: yup.string().required(),
  Số_tiền_vay: yup.string().required(),
  Số_tiền_vay_bằng_chữ: yup.string().required(),
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

export default function DonCamKetTraNoHP({navigation}) {
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
              dc_tp: '',
              dc_quận_huyện: '',
              dc_phường_xã: '',
              Loại_hình_đào_tạo: '',
              mssv: '',
              lớp: '',
              khoa: '',
              khóa: '',
              Ngày_nhập_học: '',
              Thời_gian_ra_trường: '',
              ten_đứng_ra_vay_vốn: '',
              Số_tiền_vay: '',
              Số_tiền_vay_bằng_chữ: '',
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
                <Text style={styles.font20}>Ngày ra trường (dự kiến): </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ngày ra trường (dự kiến)"
                  onChangeText={props.handleChange('Thời_gian_ra_trường')}
                  value={props.values.Thời_gian_ra_trường}
                  onBlur={props.handleBlur('Thời_gian_ra_trường')}
                />

                 {/*Họ và tên người đứng tên vay vốn: */}
                 <Text style={{color: 'crimson'}}>
                  {props.touched.ten_đứng_ra_vay_vốn && props.errors.ten_đứng_ra_vay_vốn
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Họ và tên người đứng tên vay vốn: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Họ và tên người đứng tên vay vốn"
                  onChangeText={props.handleChange('ten_đứng_ra_vay_vốn')}
                  value={props.values.ten_đứng_ra_vay_vốn}
                  onBlur={props.handleBlur('ten_đứng_ra_vay_vốn')}
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

                {/*Số Tiền Vay: */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.Số_tiền_vay && props.errors.Số_tiền_vay
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Số tiền vay:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Số tiền vay:"
                  onChangeText={props.handleChange('Số_tiền_vay')}
                  value={props.values.Số_tiền_vay}
                  onBlur={props.handleBlur('Số_tiền_vay')}
                />

                  {/*Số tiền vay bằng chữ*/}
                   <Text style={{color: 'crimson'}}>
                  {props.touched.Số_tiền_vay_bằng_chữ && props.errors.Số_tiền_vay_bằng_chữ
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Số tiền vay (bằng chữ):</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Số tiền vay (bằng chữ)"
                  onChangeText={props.handleChange('Số_tiền_vay_bằng_chữ')}
                  value={props.values.Số_tiền_vay_bằng_chữ}
                  onBlur={props.handleBlur('Số_tiền_vay_bằng_chữ')}
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
