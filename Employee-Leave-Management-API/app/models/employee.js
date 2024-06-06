module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      full_name: String,
      email: String,
      nip: String,
      gender: String,
      birth_date: String,
      birth_place: String,
      address: String,
      division: String,
      total_leave: {
        type: Number,
        default: 0
      },
      leave_available: {
        type: Number,
        default: 0
      },
      leave_active: {
        type: Number,
        default: 0
      },
      is_leave: {
        type : Boolean,
        default: false
      }
    },
    {
      timestamps: true,
    }
  );

  return mongoose.model("employee", schema);
};
