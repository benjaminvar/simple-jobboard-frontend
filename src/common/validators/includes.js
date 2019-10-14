function includes(list)
{
    return function(value)
    {
        return list.includes(value);
    };
}
export { includes }