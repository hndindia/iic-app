import React, {useEffect, useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  ScrollView
} from "react-native";
import DatePicker from "react-native-date-picker";
import {
  Avatar,
  Divider,
  Icon,
  Input,
  Overlay,
  Button,
  CheckBox
} from "react-native-elements";
import {useMutation} from "react-query";
import {deleteUser, updateUser} from "../../services/userService";
import { showToast } from "../../services/utilsService";
import Heading from "../Heading";
import Modal from "../Modal";

const ProfileContent = data => {
  const {user} = data.data;

  const [skills, setSkills] = useState([]);
  const [inputSkills, setInputSkills] = useState();
  const [skillModalVisible, setSkillModalVisible] = useState(false);

  const [work_experience, setWork_experience] = useState([]);
  const [workDetailsModalVisible, setworkDetailsModalVisible] = useState(false);
  const [addWorkModal, setAddWorkModal] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setSkills(user.skills);
    setWork_experience(user.work_experience);
  }, []);

  const {isLoading, mutate: updateUserMutate} = useMutation(userData =>
    updateUser(userData)
  );
  const {mutate: deleteUserMutate} = useMutation(userData =>
    deleteUser(userData)
  );

  const handleAddSubmit = data => {
    updateUserMutate(
      {data},
      {
        onSuccess: result => {
          // console.log("REsult ", result);
          setSkills(result.data.skills);
          setSkillModalVisible(!skillModalVisible);

          setWork_experience(user.work_experience);
          setAddWorkModal(false);
        },
        onError: error => {
          Alert.alert("Something went wrong please try again later.");
        }
      }
    );
  };

  // console.log("NEW SKILLS", skills);

  // const showToast = msg => {
  //   ToastAndroid.show(msg, ToastAndroid.LONG);
  // };

  const handleSkillDelete = (skill, skillId) => {
    deleteUserMutate(`skill_index=${skillId}`, {
      onSuccess: result => {
        console.log("REsult ", result);
        setSkills(result.skills);
        showToast(`${skill} deleted successfully`);
      },
      onError: error => {
        Alert.alert("Something went wrong please try again later.");
      }
    });
  };

  const showAddSkillModal = () => {
    return (
      <Modal
        isVisible={skillModalVisible}
        setIsVisible={() => setSkillModalVisible(!skillModalVisible)}>
        <Input
          placeholder="Input Skill separeted by commas"
          onChangeText={value => setInputSkills(value)}
        />

        <Button
          title="Add"
          disabled={isLoading}
          buttonStyle={styles.button}
          titleStyle={{fontWeight: "bold"}}
          onPress={() => {
            if (inputSkills === undefined) {
              return showToast("Please add at least one skills.");
            }

            let inputSkillsArray = inputSkills.replace(/\s/g, "").split(",");
            console.log("inputSkillsArray- ", inputSkillsArray);

            if (skills.length + inputSkillsArray.length > 15) {
              return showToast("Cannot add more than 15 skills.");
            }

            handleAddSubmit(inputSkillsArray);
          }}
        />
      </Modal>
    );
  };

  const workDetailsModal = () => {
    return (
      <Modal
        isVisible={workDetailsModalVisible}
        setIsVisible={() =>
          setworkDetailsModalVisible(!workDetailsModalVisible)
        }>
        {work_experience.map((d, i) => {
          return (
            <View
              key={i}
              style={{
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
              <View>
                <Text
                  style={{fontSize: 16, fontWeight: "bold", color: "#000000"}}>
                  {d.company_name}
                </Text>
                <Text style={{fontSize: 16}}>
                  {d.start_date} - {d.end_date}
                </Text>
                <Text>{d.position}</Text>
              </View>

              <View>
                <TouchableOpacity>
                  <Icon
                    name="delete"
                    type="antdesign"
                    size={28}
                    style={{
                      marginRight: 10
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    name="edit"
                    type="antdesign"
                    size={28}
                    style={{
                      marginRight: 10,
                      marginTop: 10
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </Modal>
    );
  };

  const addWorkExperienceModal = () => {
    return (
      <Modal
        isVisible={addWorkModal}
        setIsVisible={() => setAddWorkModal(!addWorkModal)}
        mode="cover">
        <ScrollView>
          <Text style={styles.addWorkStyle}>Company name*</Text>
          <Input
            placeholder="Ex: Google"
            onChangeText={value => setInputSkills(value)}
          />

          <Text style={styles.addWorkStyle}>Position*</Text>
          <Input
            placeholder="Ex - SDE intern"
            onChangeText={value => setInputSkills(value)}
          />

          <CheckBox
            title="I am currently working in this role"
            iconType="MaterialIcons"
            checkedIcon="check-box"
            uncheckedIcon="check-box-outline-blank"
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
          />

          <Text style={styles.addWorkStyle}>Start Date*</Text>
          <DatePicker
            maximumDate={new Date()}
            date={startDate}
            onDateChange={setStartDate}
            mode="date"
          />

          {isChecked ? null : (
            <>
              <Text style={styles.addWorkStyle}>End Date*</Text>
              <DatePicker
                maximumDate={startDate}
                date={endDate}
                onDateChange={setEndDate}
                mode="date"
              />
            </>
          )}

          <Button
            title="Add"
            disabled={isLoading}
            buttonStyle={styles.button}
            titleStyle={{fontWeight: "bold"}}
            onPress={() => {
              // if (inputSkills === undefined) {
              //   return showToast("Please add at least one skills.");
              // }
            }}
          />
        </ScrollView>
      </Modal>
    );
  };

  return (
    <View>
      {/* Education Section */}
      <Heading heading="Education" />

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20
        }}>
        <Text style={{fontSize: 16, fontWeight: "bold", color: "#000000"}}>
          {user.institute.substring(0, 30) + "...."}
        </Text>
        <Text style={{marginLeft: 10, fontSize: 16}}>
          {user.yop - 4} - {user.yop}
        </Text>
      </View>

      <View style={{paddingHorizontal: 20}}>
        <Text style={{fontSize: 16}}>{user.course}</Text>
        <Text style={{fontSize: 16}}>
          {user.branch.name}, {user.semester.value} sem
        </Text>
      </View>

      <Divider orientation="horizontal" width={1.5} style={styles.divider} />

      {/* Work Experience section */}
      {/* <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-between",
          alignItems: "center"
        }}>
        <Heading heading="Work Experience" />
        <TouchableOpacity onPress={() => setAddWorkModal(!addWorkModal)}>
          <Icon
            name="pluscircleo"
            type="antdesign"
            size={28}
            style={{
              marginRight: 10,
              marginTop: 5
            }}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => setworkDetailsModalVisible(!workDetailsModalVisible)}>
        {work_experience.map((d, i) => {
          return (
            <View key={i} style={{paddingHorizontal: 20}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "center"
                  // padding:20,
                }}>
                <Text
                  style={{fontSize: 16, fontWeight: "bold", color: "#000000"}}>
                  {d.company_name}
                </Text>
                <Text style={{marginLeft: 10, fontSize: 16}}>
                  {d.start_date} - {d.end_date}
                </Text>
              </View>
              <Text>{d.position}</Text>
            </View>
          );
        })}
      </TouchableOpacity>
      {workDetailsModal()}
      {addWorkExperienceModal()} */}


      {/* Skill Section */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-between",
          alignItems: "center"
        }}>
        <Heading heading="My Skills" />
        <TouchableOpacity
          onPress={() => {
            skills.length >= 15
              ? showToast("Cannot add more than 15 skills")
              : setSkillModalVisible(!skillModalVisible);
          }}>
          <Icon
            name="pluscircleo"
            type="antdesign"
            size={28}
            style={{
              marginRight: 10
            }}
          />
        </TouchableOpacity>
      </View>
      {skills.length === 0 ? (
        <Text style={{alignSelf: "center", fontSize: 16, color: "#000000"}}>
          Press the '+' icon to add a skill
        </Text>
      ) : (
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            flexWrap: "wrap"
          }}>
          {skills.map((skill, i) => (
            <TouchableOpacity
              key={i}
              onPress={() =>
                showToast(
                  `Do a long press to delete ${skill} from your skills section`
                )
              }
              onLongPress={() => handleSkillDelete(skill, i)}>
              <Text style={styles.skillText}>{skill}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {showAddSkillModal()}

      <Divider orientation="horizontal" width={1.5} style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  skillText: {
    fontSize: 16,
    backgroundColor: "#EDF4FA",
    alignSelf: "center",
    borderRadius: 5,
    padding: 6,
    marginHorizontal: 9,
    color: "#000000",
    marginTop: 4
  },
  divider: {
    marginTop: 5,
    width: "90%",
    alignSelf: "center",
    borderBottomColor: "#707070"
  },
  button: {
    backgroundColor: "#5B37B7",
    borderRadius: 7,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20
  },
  addWorkStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 12
  }
});

export default ProfileContent;
