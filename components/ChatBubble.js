import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const ChatBubble = ({ msg, time, date, isSender, isNewDay }) => {
  if (msg === "") {
    return;
  }
  return (
    <>
      {isNewDay ? (
        <View>
          <Text style={styles.dateText}>{date}</Text>
        </View>
      ) : (
        []
      )}
      <View
        style={isSender ? styles.containerSender : styles.containerReceiver}
      >
        {isSender ? (
          <>
            <View style={styles.textViewRight}>
              <View>
                <Text style={[styles.messageText, { alignSelf: "flex-end" }]}>
                  {msg}
                </Text>
                <Text style={[styles.timeText, { alignSelf: "flex-end" }]}>
                  {time}
                </Text>
              </View>
            </View>
            <View style={styles.iconViewRight}>
              <Image
                source={require("../assets/notif_boxitem_icon.png")}
                style={styles.icon}
              />
            </View>
          </>
        ) : (
          <>
            <View style={styles.iconViewLeft}>
              <Image
                source={require("../assets/notif_boxitem_icon.png")}
                style={styles.icon}
              />
            </View>
            <View style={styles.textViewLeft}>
              <View>
                <Text style={styles.messageText}>{msg}</Text>
                <Text style={styles.timeText}>{time}</Text>
              </View>
            </View>
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerSender: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    marginHorizontal: 8,
  },
  containerReceiver: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    marginHorizontal: 8,
  },
  textViewRight: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 3,
    borderColor: "#000000",
    borderWidth: 1,
    backgroundColor: "#66FF99",
  },
  textViewLeft: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderColor: "#000000",
    borderWidth: 1,
    backgroundColor: "#ECECEC",
    borderRadius: 3,
  },
  messageText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  timeText: {
    fontSize: 14,
  },
  dateText: {
    fontSize: 16,
    marginHorizontal: 10,
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 5
  },
  iconViewLeft: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  iconViewRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  icon: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
});

export default ChatBubble;