import React, { useState } from "react";
import {
  View,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { Rupee, Payment, Copy } from "../Icons";
import i18n from "../../lib/I18n";
import Text from "../Text";

let isSafe = true;

const UpiPaymentInfo = ({
  data,
  title,
  copyToClipBoard,
  openInApp,
  upiMerchantName,
  upiMerchantId,
  upiAmountToPay,
}) => {
  const [modalVisible, setModalVisable] = useState(false);
  //modal
  return (
    <View style={styles.detailsCardHolder}>
      <View style={styles.detailsCard}>
        <View style={styles.detailsIconCenter}>
          <View style={styles.detailsIconHolder}>
            <Rupee size={70} stroke={"#5E72E4"} />
          </View>
        </View>
        <View style={styles.detailsContent}>
          <View style={styles.detailsIndicator}>
            <View
              style={[styles.detailsIndicatorIcon, styles.paymentInfoHolder]}
            >
              <View>
                <Payment size={35} color={"#1EA15D"} />
              </View>
              <Text
                style={[styles.detailsIndicatorText, styles.upiPaymentText]}
              >
                {i18n.t("common.paymentLabel")}
              </Text>
            </View>

            <View style={styles.paymentUpiInfo}>
              {upiAmountToPay ? (
                <Text style={styles.paymentUpiName}>
                  {i18n.t("upi.detailWithPaymentText", {
                    amountToPay: upiAmountToPay,
                    merchantName: upiMerchantName,
                    merchantId: upiMerchantId,
                  })}
                </Text>
              ) : (
                <Text style={styles.paymentUpiName}>
                  {i18n.t("upi.detailText", {
                    merchantName: upiMerchantName,
                    merchantId: upiMerchantId,
                  })}
                </Text>
              )}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.detailsCard}>
        <View style={styles.paymentUpiInfo}>
          <Text style={styles.paymentUpiName}>
            {i18n.t("common.nameLabel")}: {upiMerchantName}
          </Text>
          <Text style={styles.paymentUpiId}>
            {i18n.t("common.addressLabel")}: {upiMerchantId}
          </Text>
          {upiAmountToPay && (
            <Text style={styles.paymentUpiId}>
              {i18n.t("common.amountLabel")}: {upiAmountToPay}
            </Text>
          )}
        </View>
        {!data?.startsWith("000201") && (
          <>
            <View style={styles.detailsRedirectLinkHolder}>
              <TouchableOpacity onPress={openInApp}>
                <View style={styles.detailsRedirectLinkHeader}>
                  <Text style={styles.detailsRedirectLinkText}>
                    {i18n.t("upi.linkText")}
                  </Text>
                  <View style={styles.detailsShare}>
                    <TouchableOpacity
                      style={styles.detailsShareButtons}
                      onPress={copyToClipBoard}
                    >
                      <Copy size={20} color={"#707070"} />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.redirectLink} numberOfLines={1}>
                  {data}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default UpiPaymentInfo;
