import React, {useEffect, useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ToastAndroid
} from "react-native";
import {
  Avatar,
  Divider,
  Icon,
  Input,
  Overlay,
  Button
} from "react-native-elements";
import {useMutation} from "react-query";
import {deleteUser, updateUser} from "../../services/userService";
import AppButton from "../AppButton";
import Heading from "../Heading";

const ProfileContent = data => {
  const {user} = data.data;

  const [skills, setSkills] = useState([]);
  const [inputSkills, setInputSkills] = useState();
  const [skillModalVisible, setSkillModalVisible] = useState(false);

  useEffect(() => {
    setSkills(user.skills);
  }, []);

  const {isLoading, mutate: updateUserMutate} = useMutation(userData =>
    updateUser(userData)
  );
  const {mutate: deleteUserMutate} = useMutation(userData =>
    deleteUser(userData)
  );

  const handleAddSkillSubmit = skills => {
    updateUserMutate(
      {skills},
      {
        onSuccess: result => {
          // console.log("REsult ", result);
          setSkills(result.data.skills);
          setSkillModalVisible(!skillModalVisible);
        },
        onError: error => {
          Alert.alert("Something went wrong please try again later.");
        }
      }
    );
  };

  // console.log("NEW SKILLS", skills);

  const showToast = msg => {
    ToastAndroid.show(msg, ToastAndroid.LONG);
  };

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
      <Overlay
        isVisible={skillModalVisible}
        onBackdropPress={() => setSkillModalVisible(!skillModalVisible)}
        overlayStyle={{
          width: "90%",
          padding: 20
        }}>
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
              return showToast("Please add skills in the input box.");
            }

            let inputSkillsArray = inputSkills.replace(/\s/g, "").split(",");
            console.log("inputSkillsArray- ", inputSkillsArray);

            if (skills.length + inputSkillsArray.length > 15) {
              return showToast("Cannot add more than 15 skills.");
            }

            handleAddSkillSubmit(inputSkillsArray);
          }}
        />
      </Overlay>
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
  }
});

export default ProfileContent;
