export const getTargetedPlatformKeys = ({ isGrand, isElit, isLite }) => ({
  is_grand: isGrand ? 1 : 0,
  is_elit: isElit ? 1 : 0,
  is_lite: isLite ? 1 : 0,
});
