export default function removeClassFromAttrs(attrs: {[key: string]: any}){
    return Object.fromEntries(
    Object.entries(attrs).filter((attr) => attr[0] !== "className"),
  );
}