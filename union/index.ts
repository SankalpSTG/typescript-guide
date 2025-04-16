type AConfigOptions = {
  isGlobal: boolean
}
type AConfig = {
  type: "a",
  configOptions: AConfigOptions
}
type BConfigOptions = {
  isRegional: boolean
}
type BConfig = {
  type: "b",
  configOptions: BConfigOptions
}

type Config = AConfig | BConfig

const processConfig = (config: Config) => {
  switch(config.type){
    case "a":
      console.log(config.configOptions.isGlobal)
      break
    case "b":
      console.log(config.configOptions.isRegional)
      break
    default:
      console.log("Invalid Config")
  }
}