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
      total_leave: Number,
      leave_available: {
        type: Number,
        validate: {
            validator: function (value) {
                return value <= this.total_leave;
            },
            message: "Leave Available must be less than or equals total leave"
        }
      }
    },
    {
      timestamps: true,
    }
  );

  return mongoose.model("employee", schema);
};
