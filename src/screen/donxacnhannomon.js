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
  hộ_khẩu: yup.string().required(),
  chổ_ở: yup.string().required(),
  Hệ_đào_tạo: yup.string().required(),
  Loại_hinh_đào_tạo: yup.string().required(),
  mssv: yup.string().required(),
  lớp: yup.string().required(),
  khoa: yup.string().required(),
  Ngày_tốt_ngiệp: yup.string().required(),
  Thời_gian_khóa_hoc: yup.string().required(),
  các_môn_nợ: yup.string().required(),
  lý_do: yup.string().required(),
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

export default function DonXacNhanNoMon({navigation}) {
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
              mssv: '',
              khoa: '',
              hộ_khẩu: '',
              chổ_ở: '',
              Hệ_đào_tạo: '',
              Loại_hinh_đào_tạo: '',
              Thời_gian_khóa_hoc: '',
              Ngày_tốt_ngiệp: '',
              các_môn_nợ: '',
              lý_do: '',
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

                {/* Chỗ ở hiện nay (ghi đầy đủ) */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.chổ_ở && props.errors.chổ_ở
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Chỗ ở hiện nay (ghi đầy đủ): </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Chỗ ở hiện nay (ghi đầy đủ)"
                  onChangeText={props.handleChange('chổ_ở')}
                  value={props.values.chổ_ở}
                  onBlur={props.handleBlur('chổ_ở')}
                />
                {/* Hệ đào tạo (Cao đẳng/CĐN/TCCN): */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.Hệ_đào_tạo && props.errors.Hệ_đào_tạo
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Hệ đào tạo (Cao đẳng/CĐN/TCCN): </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Hệ đào tạo (Cao đẳng/CĐN/TCCN)"
                  onChangeText={props.handleChange('Hệ_đào_tạo')}
                  value={props.values.Hệ_đào_tạo}
                  onBlur={props.handleBlur('Hệ_đào_tạo')}
                />
                 {/* Loại hình đào tạo: */}
                 <Text style={{color: 'crimson'}}>
                  {props.touched.Loại_hinh_đào_tạo && props.errors.Loại_hinh_đào_tạo
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Loại hình đào tạo: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Loại hình đào tạo"
                  onChangeText={props.handleChange('Loại_hinh_đào_tạo')}
                  value={props.values.Loại_hinh_đào_tạo}
                  onBlur={props.handleBlur('Loại_hinh_đào_tạo')}
                />
                 {/* Thời gian khóa học : */}
                 <Text style={{color: 'crimson'}}>
                  {props.touched.Thời_gian_khóa_hoc && props.errors.Thời_gian_khóa_hoc
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Thời gian khóa học: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Thời gian khóa học"
                  onChangeText={props.handleChange('Thời_gian_khóa_hoc')}
                  value={props.values.Thời_gian_khóa_hoc}
                  onBlur={props.handleBlur('Thời_gian_khóa_hoc')}
                />
                 {/* Nếu theo kịp tiến độ đào tạo tôi đã tốt nghiệp vào: */}
                 <Text style={{color: 'crimson'}}>
                  {props.touched.Ngày_tốt_ngiệp && props.errors.Ngày_tốt_ngiệp
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Nếu theo kịp tiến độ đào tạo tôi đã tốt nghiệp vào: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ngày tốt ngiệp"
                  onChangeText={props.handleChange('Ngày_tốt_ngiệp')}
                  value={props.values.Ngày_tốt_ngiệp}
                  onBlur={props.handleBlur('Ngày_tốt_ngiệp')}
                />
                {/* Các môn còn nợ: */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.các_môn_nợ && props.errors.các_môn_nợ
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Các môn còn nợ: </Text>
                <TextInput
                  style={styles.monno}
                  placeholder="Các môn còn nợ"
                  onChangeText={props.handleChange('các_môn_nợ')}
                  value={props.values.các_môn_nợ}
                  onBlur={props.handleBlur('các_môn_nợ')}
                /> 
                {/* Lý do: */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.lý_do && props.errors.lý_do
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Lý do: </Text>
                <TextInput
                  style={styles.monno}
                  placeholder="Lý do"
                  onChangeText={props.handleChange('lý_do')}
                  value={props.values.lý_do}
                  onBlur={props.handleBlur('lý_do')}
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