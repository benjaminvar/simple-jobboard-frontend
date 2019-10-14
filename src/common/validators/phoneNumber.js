export const phoneNumber =function(value)
{
    return (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g).test(value);
}