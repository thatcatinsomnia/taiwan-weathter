// Wx 天氣現象
// MaxT 最高溫度
// MinT 最低溫度
// CI 舒適度
// PoP 降雨機率
export default {
  "success": "true",
  "result": {
    "resource_id": "F-C0032-001",
    "fields": [
      {
        "id": "datasetDescription",
        "type": "String"
      },
      {
        "id": "locationName",
        "type": "String"
      },
      {
        "id": "parameterName",
        "type": "String"
      },
      {
        "id": "parameterValue",
        "type": "String"
      },
      {
        "id": "parameterUnit",
        "type": "String"
      },
      {
        "id": "startTime",
        "type": "Timestamp"
      },
      {
        "id": "endTime",
        "type": "Timestamp"
      }
    ]
  },
  "records": {
    "datasetDescription": "三十六小時天氣預報",
    "location": [
      {
        "locationName": "嘉義縣",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "晴時多雲",
                  "parameterValue": "2"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "晴時多雲",
                  "parameterValue": "2"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "多雲時晴",
                  "parameterValue": "3"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "19",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "18",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "14",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "寒冷至稍有寒意"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "23",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "22",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "18",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "新北市",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "陰短暫雨",
                  "parameterValue": "11"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "陰短暫雨",
                  "parameterValue": "11"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "陰短暫雨",
                  "parameterValue": "11"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "100",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "90",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "80",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "17",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "14",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "13",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "寒冷至稍有寒意"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "寒冷"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "22",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "17",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "14",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "嘉義市",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "多雲短暫雨",
                  "parameterValue": "8"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "多雲時晴",
                  "parameterValue": "3"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "多雲",
                  "parameterValue": "4"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "30",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "19",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "18",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "14",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "寒冷至稍有寒意"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "24",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "24",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "19",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "新竹縣",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "陰時多雲短暫雨",
                  "parameterValue": "10"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "陰天",
                  "parameterValue": "7"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "陰短暫雨",
                  "parameterValue": "11"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "90",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "20",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "40",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "16",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "15",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "13",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "寒冷至稍有寒意"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "寒冷"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "20",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "17",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "15",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "新竹市",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "陰時多雲短暫雨",
                  "parameterValue": "10"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "陰天",
                  "parameterValue": "7"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "陰短暫雨",
                  "parameterValue": "11"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "80",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "20",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "30",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "16",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "15",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "13",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "寒冷至稍有寒意"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "寒冷"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "20",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "17",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "15",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "臺北市",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "陰短暫雨",
                  "parameterValue": "11"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "陰短暫雨",
                  "parameterValue": "11"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "陰短暫雨",
                  "parameterValue": "11"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "100",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "80",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "80",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "16",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "13",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "12",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "寒冷至稍有寒意"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "寒冷"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "22",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "16",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "13",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "臺南市",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "晴時多雲",
                  "parameterValue": "2"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "晴時多雲",
                  "parameterValue": "2"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "多雲",
                  "parameterValue": "4"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "20",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "19",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "15",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "舒適"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "寒冷至稍有寒意"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "23",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "23",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "19",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "宜蘭縣",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "陰時多雲短暫雨",
                  "parameterValue": "10"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "陰短暫雨",
                  "parameterValue": "11"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "陰短暫雨",
                  "parameterValue": "11"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "30",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "30",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "30",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "17",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "15",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "13",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "寒冷至稍有寒意"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "寒冷"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "22",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "17",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "15",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "苗栗縣",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "陰時多雲短暫雨",
                  "parameterValue": "10"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "多雲時晴",
                  "parameterValue": "3"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "多雲時晴",
                  "parameterValue": "3"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "80",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "20",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "16",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "15",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "13",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "寒冷至稍有寒意"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "寒冷"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "21",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "18",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "15",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "雲林縣",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "多雲短暫雨",
                  "parameterValue": "8"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "多雲時晴",
                  "parameterValue": "3"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "多雲時晴",
                  "parameterValue": "3"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "30",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "18",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "18",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "14",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "寒冷至稍有寒意"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "23",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "22",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "18",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "花蓮縣",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "晴時多雲",
                  "parameterValue": "2"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "陰時多雲",
                  "parameterValue": "6"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "陰天",
                  "parameterValue": "7"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "20",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "20",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "20",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "19",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "18",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "14",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "寒冷至稍有寒意"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "23",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "21",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "18",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "臺中市",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "陰時多雲短暫雨",
                  "parameterValue": "10"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "多雲時晴",
                  "parameterValue": "3"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "多雲時晴",
                  "parameterValue": "3"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "30",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "20",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "18",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "18",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "15",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "寒冷至稍有寒意"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "22",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "22",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "18",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "臺東縣",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "晴時多雲",
                  "parameterValue": "2"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "陰時多雲短暫雨",
                  "parameterValue": "10"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "陰天",
                  "parameterValue": "7"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "30",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "20",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "21",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "20",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "16",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "舒適"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "稍有寒意"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "24",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "23",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "20",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "桃園市",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "陰短暫雨",
                  "parameterValue": "11"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "陰短暫雨",
                  "parameterValue": "11"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "陰短暫雨",
                  "parameterValue": "11"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "100",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "60",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "70",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "16",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "14",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "12",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "寒冷至稍有寒意"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "寒冷"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "21",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "16",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "14",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "南投縣",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "多雲短暫雨",
                  "parameterValue": "8"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "多雲時晴",
                  "parameterValue": "3"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "陰時多雲",
                  "parameterValue": "6"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "50",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "20",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "19",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "19",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "14",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "寒冷至稍有寒意"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "23",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "23",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "19",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "高雄市",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "晴時多雲",
                  "parameterValue": "2"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "晴時多雲",
                  "parameterValue": "2"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "多雲時陰",
                  "parameterValue": "5"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "22",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "22",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "17",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "舒適"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "舒適"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "26",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "25",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "22",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "金門縣",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "多雲時陰",
                  "parameterValue": "5"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "陰天",
                  "parameterValue": "7"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "陰天",
                  "parameterValue": "7"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "20",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "15",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "13",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "11",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "寒冷至稍有寒意"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "寒冷至稍有寒意"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "寒冷"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "17",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "16",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "13",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "屏東縣",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "晴時多雲",
                  "parameterValue": "2"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "多雲",
                  "parameterValue": "4"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "多雲時陰",
                  "parameterValue": "5"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "21",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "21",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "16",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "舒適"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "舒適"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "27",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "27",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "23",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "基隆市",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "陰有雨",
                  "parameterValue": "14"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "陰有雨",
                  "parameterValue": "14"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "陰有雨",
                  "parameterValue": "14"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "100",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "90",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "90",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "16",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "14",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "12",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "寒冷至稍有寒意"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "寒冷"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "20",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "16",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "14",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "澎湖縣",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "晴時多雲",
                  "parameterValue": "2"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "多雲時晴",
                  "parameterValue": "3"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "多雲",
                  "parameterValue": "4"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "17",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "14",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "14",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "稍有寒意"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "寒冷至稍有寒意"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "寒冷"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "18",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "18",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "15",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "彰化縣",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "多雲短暫雨",
                  "parameterValue": "8"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "晴時多雲",
                  "parameterValue": "2"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "多雲時晴",
                  "parameterValue": "3"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "30",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "20",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "17",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "17",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "14",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "稍有寒意至舒適"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "稍有寒意"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "寒冷至稍有寒意"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "21",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "20",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "17",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      },
      {
        "locationName": "連江縣",
        "weatherElement": [
          {
            "elementName": "Wx",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "陰有雨",
                  "parameterValue": "14"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "陰有雨",
                  "parameterValue": "14"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "陰時多雲短暫雨",
                  "parameterValue": "10"
                }
              }
            ]
          },
          {
            "elementName": "PoP",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "70",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "70",
                  "parameterUnit": "百分比"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "30",
                  "parameterUnit": "百分比"
                }
              }
            ]
          },
          {
            "elementName": "MinT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "9",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "7",
                  "parameterUnit": "C"
                }
              }
            ]
          },
          {
            "elementName": "CI",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "非常寒冷至寒冷"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "非常寒冷"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "非常寒冷"
                }
              }
            ]
          },
          {
            "elementName": "MaxT",
            "time": [
              {
                "startTime": "2023-01-14 18:00:00",
                "endTime": "2023-01-15 06:00:00",
                "parameter": {
                  "parameterName": "13",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 06:00:00",
                "endTime": "2023-01-15 18:00:00",
                "parameter": {
                  "parameterName": "10",
                  "parameterUnit": "C"
                }
              },
              {
                "startTime": "2023-01-15 18:00:00",
                "endTime": "2023-01-16 06:00:00",
                "parameter": {
                  "parameterName": "9",
                  "parameterUnit": "C"
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
